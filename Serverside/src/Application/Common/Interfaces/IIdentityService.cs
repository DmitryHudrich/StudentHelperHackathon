using StudentHelper.Application.Common.Models;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Common.Interfaces;

public interface IIdentityService {
    Task<String?> GetUserNameAsync(String userId);

    Task<Boolean> IsInRoleAsync(String userId, String role);

    Task<Boolean> AuthorizeAsync(String userId, String policyName);

    Task<(Result Result, String UserId)> CreateUserAsync(String userName, String password, String fullName, Int32 age, Int32 universityId); Task<Result> DeleteUserAsync(String userId);

    Task<(String Id, String Email, Int32? Age, String FullName, University University)?> GetUserProfile(String login);

    Task UpdateUserAsync(String userId, String email, Int32? age, String fullName, Int32 universityId);
}
