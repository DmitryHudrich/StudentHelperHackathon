using StudentHelper.Application.Common.Models;
using Microsoft.AspNetCore.Identity;

namespace StudentHelper.Infrastructure.Identity;

public static class IdentityResultExtensions {
    public static Result ToApplicationResult(this IdentityResult result) {
        return result.Succeeded
            ? Result.Success()
            : Result.Failure(result.Errors.Select(static e => e.Description));
    }
}
