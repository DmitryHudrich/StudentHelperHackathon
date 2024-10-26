using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Queries; 

public class GetAllBranchesByUniversityQuery : IRequest<List<StudentHelper.Domain.Entities.Branch>> {
    public int UniversityId { get; set; }
}

public class GetAllBranchesByUniversityQueryHandler(IApplicationDbContext context) : IRequestHandler<GetAllBranchesByUniversityQuery, List<StudentHelper.Domain.Entities.Branch>> {
    public async Task<List<StudentHelper.Domain.Entities.Branch>> Handle(GetAllBranchesByUniversityQuery request, CancellationToken cancellationToken) {
        if (context.Branches == null) {
            return new List<StudentHelper.Domain.Entities.Branch>();
        }

        var branches = await context.Branches
            .Where(b => b.University.Id == request.UniversityId)
            .ToListAsync(cancellationToken);

        return branches ?? [];
    }
}
