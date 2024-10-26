using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Queries; 

public class GetBranchByIdQuery : IRequest<StudentHelper.Domain.Entities.Branch> {
    public Int32 Id { get; set; }
}

public class GetBranchQueryHandler(IApplicationDbContext context) : IRequestHandler<GetBranchByIdQuery, StudentHelper.Domain.Entities.Branch?> {
    public async Task<StudentHelper.Domain.Entities.Branch?> Handle(GetBranchByIdQuery request, CancellationToken cancellationToken) {
        if (context.Branches == null) {
            return null;
        }
        var branch = await context.Branches
            .FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        return branch;
    }
}
