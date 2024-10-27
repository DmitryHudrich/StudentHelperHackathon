using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Application.Common.Models;
using StudentHelper.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace StudentHelper.Infrastructure.Identity;

public class IdentityService(
    UserManager<ApplicationUser> userManager,
    IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory,
    IAuthorizationService authorizationService,
    IApplicationDbContext context) : IIdentityService {
    public async Task<String?> GetUserNameAsync(String userId) {
        var user = await userManager.FindByIdAsync(userId);
        return user?.UserName;
    }

    public async Task<(Result Result, String UserId)> CreateUserAsync(String userName, String password, String fullName, Int32 age, Int32 universityId) {
        var user = new ApplicationUser {
            UserName = userName,
            Email = userName,
            Age = age,
            FullName = fullName,
            University = context.Universities.FirstOrDefault(u => u.Id == universityId)
        };

        var result = await userManager.CreateAsync(user, password);
        return (result.ToApplicationResult(), user.Id);
    }

    public async Task<(String Id, String Email, Int32? Age, String FullName, University University)?> GetUserProfile(String id) {
        var user = userManager.Users.FirstOrDefault(u => u.Id == id);
        if (user == null) {
            return ("", "", 0, "", null!);
        }
        Console.WriteLine(user.Age);
        return (user.Id, user.Email, user.Age, user.FullName, user.University)!;
    }


    public async Task UpdateUserAsync(String userId, String email, Int32? age, String fullName, Int32 universityId) {
        var user = userManager.Users.FirstOrDefault(u => u.Id == userId);
        if (user == null) {
            return;
        }
        user.Email = email;
        user.Age = age;
        user.FullName = fullName;
        user.University = context.Universities.FirstOrDefault(u => u.Id == universityId);
        await userManager.UpdateAsync(user);
    }

    public async Task<Boolean> IsInRoleAsync(String userId, String role) {
        var user = await userManager.FindByIdAsync(userId);

        return user != null && await userManager.IsInRoleAsync(user, role);
    }

    public async Task<Boolean> AuthorizeAsync(String userId, String policyName) {
        var user = await userManager.FindByIdAsync(userId);
        if (user == null) {
            return false;
        }

        var principal = await userClaimsPrincipalFactory.CreateAsync(user);
        var result = await authorizationService.AuthorizeAsync(principal, policyName);

        return result.Succeeded;
    }

    public async Task<Result> DeleteUserAsync(String userId) {
        var user = await userManager.FindByIdAsync(userId);

        return user != null ? await DeleteUserAsync(user) : Result.Success();
    }

    public async Task<Result> DeleteUserAsync(ApplicationUser user) {
        var result = await userManager.DeleteAsync(user);

        return result.ToApplicationResult();
    }
}
