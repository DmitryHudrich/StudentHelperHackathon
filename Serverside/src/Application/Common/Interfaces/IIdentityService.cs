using StudentHelper.Application.Common.Models;

namespace StudentHelper.Application.Common.Interfaces;

public interface IIdentityService {
    Task<String?> GetUserNameAsync(String userId);

    Task<Boolean> IsInRoleAsync(String userId, String role);

    Task<Boolean> AuthorizeAsync(String userId, String policyName);

    Task<(Result Result, String UserId)> CreateUserAsync(String userName, String password);

    Task<Result> DeleteUserAsync(String userId);
}
