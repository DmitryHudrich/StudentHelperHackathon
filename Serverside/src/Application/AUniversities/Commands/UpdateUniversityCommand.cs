using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.AUniversities.Commands;

public class UpdateUniversityCommand : IRequest<Boolean> {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String MainAddress { get; set; }
    public required List<Contact> Contacts { get; set; } = [];
    public required String Information { get; set; }
    public required String Image { get; set; }
}

public record Contact(String Name, String Content);

public class UpdateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<UpdateUniversityCommand, bool> {
    public async Task<bool> Handle(UpdateUniversityCommand request, CancellationToken cancellationToken) {
        var university = await context.Universities.FirstOrDefaultAsync(u => u.Id == request.Id, cancellationToken);
        if (university == null) {
            return false;
        }
        for (int i = 0; i < request.Contacts.Count; i++) {
            university.Contacts[i].Name = request.Contacts[i].Name;
            university.Contacts[i].Content = request.Contacts[i].Content;
        }
        university.Name = request.Name;
        university.Address = request.MainAddress;
        university.Information = request.Information;
        university.Image = request.Image;

        await context.SaveChangesAsync(cancellationToken);
        return true;
    }
}

