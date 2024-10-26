using StudentHelper.Domain.Constants;
using StudentHelper.Domain.Entities;
using StudentHelper.Infrastructure.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace StudentHelper.Infrastructure.Data;

public static class InitialiserExtensions {
    public static async Task InitialiseDatabaseAsync(this WebApplication app) {
        using var scope = app.Services.CreateScope();

        var initialiser = scope.ServiceProvider.GetRequiredService<ApplicationDbContextInitialiser>();

        await initialiser.InitialiseAsync();

        await initialiser.SeedAsync();
    }
}

public class ApplicationDbContextInitialiser(ILogger<ApplicationDbContextInitialiser> logger, ApplicationDbContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager) {
    public async Task InitialiseAsync() {
        try {
            await context.Database.MigrateAsync();
            logger.LogInformation("Migrations uspeshno.");
        }
        catch (Exception ex) {
            logger.LogError(ex, "An error occurred while initialising the database.");
            throw;
        }
    }

    public async Task SeedAsync() {
        try {
            await TrySeedAsync();
        }
        catch (Exception ex) {
            logger.LogError(ex, "An error occurred while seeding the database.");
            throw;
        }
    }

    public async Task TrySeedAsync() {
        // Default roles
        var administratorRole = new IdentityRole(Roles.Administrator);

        if (roleManager.Roles.All(r => r.Name != administratorRole.Name)) {
            await roleManager.CreateAsync(administratorRole);
        }

        // Default users
        var administrator = new ApplicationUser { UserName = "administrator@localhost", Email = "administrator@localhost" };

        if (userManager.Users.All(u => u.UserName != administrator.UserName)) {
            await userManager.CreateAsync(administrator, "Administrator1!");
            if (!String.IsNullOrWhiteSpace(administratorRole.Name)) {
                await userManager.AddToRolesAsync(administrator, [administratorRole.Name]);
            }
        }
    }
}
