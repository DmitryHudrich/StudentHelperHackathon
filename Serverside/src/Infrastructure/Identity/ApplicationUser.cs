using Microsoft.AspNetCore.Identity;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Infrastructure.Identity;

public class ApplicationUser : IdentityUser {
    public University? University { get; set; }
    public String? FullName { get; set; }
    public Int32? Age { get; set; }
}
