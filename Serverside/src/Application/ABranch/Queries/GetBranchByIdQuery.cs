using StudentHelper.Application.ABranch.Commands;
using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Queries;

public class GetBranchByIdQuery : IRequest<BranchResponse> {
    public Int32 Id { get; set; }
}

public class GetBranchQueryHandler(IApplicationDbContext context) : IRequestHandler<GetBranchByIdQuery, BranchResponse> {
    public async Task<BranchResponse?> Handle(GetBranchByIdQuery request, CancellationToken cancellationToken) {
        if (context.Branches == null) {
            return null;
        }
        var branch = await context.Branches
            .FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        return new BranchResponse() {
            Id = branch.Id,
            Name = branch.Name,
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
        };
    }
}
