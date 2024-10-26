using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ATopic.Queries;

public class GetTopicsByBranchQuery : IRequest<List<Topic>> {
    public Int32 Id { get; set; }
}

public class GetTopicsByBranchQueryHandler(IApplicationDbContext context) : IRequestHandler<GetTopicsByBranchQuery, List<Topic>> {
    public async Task<List<Topic>> Handle(GetTopicsByBranchQuery request, CancellationToken cancellationToken) {
        if (context.Topics == null) {
            return [];
        }
        var topics = await context.Topics
            .Where(t => t.Branch.Id == request.Id).ToListAsync();
        return topics;
    }
}

