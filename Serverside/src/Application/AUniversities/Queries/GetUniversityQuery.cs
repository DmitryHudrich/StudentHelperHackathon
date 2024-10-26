using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ATopic.Queries;

public class GetTopicsByBranch : IRequest<University> {
    public Int32 Id { get; set; }
}

public class GetUniversityQueryHandler(IApplicationDbContext context) : IRequestHandler<GetTopicsByBranch, University?> {
    public async Task<University?> Handle(GetTopicsByBranch request, CancellationToken cancellationToken) {
        if (context.Universities == null) {
            return null;
        }
        var university = await context.Universities
            .FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        return university;
    }
}
