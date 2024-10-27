using StudentHelper.Application.ABranch.Commands;
using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.Common.Interfaces;

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
        var branchesDto = new List<BranchResponse>();
        foreach (var branch in branches) {
            branchesDto.Add(new BranchResponse() {
                Name = branch.Name,
                Id = branch.Id,
                Address = branch.Address,
                Information = branch.Information,
                Image = branch.Image,
                Topics = branch.Topics.Select(t => new TopicDto {
                    Id = t.Id,
                    Title = t.Title,
                    Image = t.Image,
                    Content = t.Content,
                    UserId = t.UserId,
                    Contacts = t.Contacts.Select(tc => new Contact(
                        tc.Id,
                        tc.Name,
                        tc.Content
                    )).ToList()
                }).ToList(),
            });
        }
        return branches ?? [];
    }
}
