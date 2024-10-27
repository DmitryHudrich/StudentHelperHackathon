using StudentHelper.Application.Common.Interfaces;

namespace StudentHelper.Application.AUsers;

public class UpdateProfileCommand : IRequest {
    public required String UserId { get; set; }
    public required String Email { get; set; }
    public required Int32? Age { get; set; }
    public required String FullName { get; set; }
    public required Int32 UniversityId { get; set; }
}

public class UpdateProfileCommandHandler(IApplicationDbContext context, IIdentityService identityService) : IRequestHandler<UpdateProfileCommand> {
    public async Task Handle(UpdateProfileCommand request, CancellationToken cancellationToken) {
        await identityService.UpdateUserAsync(request.UserId, request.Email, request.Age, request.FullName, request.UniversityId);
    }
}
