using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Universities.Queries;

public class GetAllUniversitiesQuery : IRequest<List<University>>;

public class GetAllUniversitiesQueryHandler(IApplicationDbContext context) : 
    IRequestHandler<GetAllUniversitiesQuery, List<University>> {
    public async Task<List<University>> Handle(GetAllUniversitiesQuery request, CancellationToken cancellationToken) {
        System.Console.WriteLine(context.Universities == null);
        if (context.Universities == null) {
            return [];
        }
        return await context.Universities.ToListAsync();
    }
}

