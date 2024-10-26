using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.Branch.Commands;

public class AddContactToBranchCommand : IRequest<BranchContact?> {
    public required Int32 BranchId { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
}

public class AddContactToBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<AddContactToBranchCommand, BranchContact?> {
    public async Task<BranchContact?> Handle(AddContactToBranchCommand request, CancellationToken cancellationToken) {
        var branch = await context.Branches.FirstOrDefaultAsync(b => b.Id == request.BranchId);
        if (branch == null) {
            return null;
        }
        var contact = new BranchContact() {
            Name = request.Name,
            Content = request.Content,
            Branch = branch,
        };
        branch?.Contacts.Add(contact);
        await context.SaveChangesAsync(cancellationToken);
        return contact;
    }
}

