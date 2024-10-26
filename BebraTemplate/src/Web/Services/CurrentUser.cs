using System.Security.Claims;
using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Web.Services;

public class CurrentUser(IHttpContextAccessor httpContextAccessor) : IUser {
    public String? Id => httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
}
