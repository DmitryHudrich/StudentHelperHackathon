using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.AUsers;

public class GetUserQuery : IRequest<UserQueryResponse> {
    public required String Id { get; set; }
}

public record UserQueryResponse(String UserId, Int32 Age, String FullName, String Email, University University);

public class GetUserQueryHandler(IIdentityService identityService) :
    IRequestHandler<GetUserQuery, UserQueryResponse> {
    public async Task<UserQueryResponse> Handle(GetUserQuery request, CancellationToken cancellationToken) {
        var profile = await identityService.GetUserProfile(request.Id);
        return new UserQueryResponse(
            profile.Value.Id,
            profile.Value.Age.HasValue ? profile.Value.Age.Value : -1,
            profile.Value.FullName,
            profile.Value.Email,
            profile.Value.University
        );
    }
}
