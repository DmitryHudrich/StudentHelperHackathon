using Microsoft.AspNetCore.Identity;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Infrastructure.Identity;

public class ApplicationUser : IdentityUser {
    public University? University { get; set; } = null;
}
