using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Application.Common.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace StudentHelper.Infrastructure.Identity;

public class IdentityService(
    UserManager<ApplicationUser> userManager,
    IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory,
    IAuthorizationService authorizationService) : IIdentityService {
    public async Task<String?> GetUserNameAsync(String userId) {
        var user = await userManager.FindByIdAsync(userId);

        return user?.UserName;
    }

    public async Task<(Result Result, String UserId)> CreateUserAsync(String userName, String password) {
        var user = new ApplicationUser {
            UserName = userName,
            Email = userName,
        };

        var result = await userManager.CreateAsync(user, password);

        return (result.ToApplicationResult(), user.Id);
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
