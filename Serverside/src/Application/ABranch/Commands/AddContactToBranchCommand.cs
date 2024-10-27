using StudentHelper.Application.AUniversities.Commands;
using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.ABranch.Commands;

public class AddContactToBranchCommand : IRequest<Contact?> {
    public required Int32 BranchId { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
}

public class AddContactToBranchCommandHandler(IApplicationDbContext context) : IRequestHandler<AddContactToBranchCommand, Contact?> {
    public async Task<Contact?> Handle(AddContactToBranchCommand request, CancellationToken cancellationToken) {
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
        return new Contact(contact.Id, contact.Name, contact.Content);
    }
}

