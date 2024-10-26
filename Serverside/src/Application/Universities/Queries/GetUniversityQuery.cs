using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Universities.Queries; 

public class GetUniversityQuery : IRequest<University> {
    public Int32 Id { get; set; }
}

public class GetUniversityQueryHandler(IApplicationDbContext context) : IRequestHandler<GetUniversityQuery, University?> {
    public async Task<University?> Handle(GetUniversityQuery request, CancellationToken cancellationToken) {
        if (context.Universities == null) {
            return null;
        }
        var university = await context.Universities
            .FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        return university;
    }
}
