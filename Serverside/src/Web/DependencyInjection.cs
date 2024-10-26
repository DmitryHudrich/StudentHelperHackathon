using Azure.Identity;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Infrastructure.Data;
using StudentHelper.Web.Services;
using Microsoft.AspNetCore.Mvc;

namespace StudentHelper.Web;

public static class DependencyInjection {
    public static IServiceCollection AddWebServices(this IServiceCollection services) {
        services.AddDatabaseDeveloperPageExceptionFilter();

        services.AddScoped<IUser, CurrentUser>();

        services.AddHttpContextAccessor();

        services.AddHealthChecks()
            .AddDbContextCheck<ApplicationDbContext>();

        services.AddExceptionHandler<CustomExceptionHandler>();

        // Customise default API behaviour
        services.Configure<ApiBehaviorOptions>(static options =>
            options.SuppressModelStateInvalidFilter = true);

        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();

        return services;
    }

    public static IServiceCollection AddKeyVaultIfConfigured(this IServiceCollection services, ConfigurationManager configuration) {
        var keyVaultUri = configuration["AZURE_KEY_VAULT_ENDPOINT"];
        if (!String.IsNullOrWhiteSpace(keyVaultUri)) {
            configuration.AddAzureKeyVault(
                new Uri(keyVaultUri),
                new DefaultAzureCredential());
        }

        return services;
    }
}
