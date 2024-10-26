using StudentHelper.Application.Common.Interfaces;
using StudentHelper.Domain.Entities;

namespace StudentHelper.Application.AUniversities.Commands;

public class UniversityContactCommand {
    public required String Name { get; set; }
    public required String Content { get; set; }
    public required Int32 UniversityId { get; set; }
}

public class CreateUniversityCommand : IRequest<University?> {
    public required String Name { get; set; }
    public required String MainAddress { get; set; }
    public required String Information { get; set; }
    public required String Image { get; set; }
    public required List<Contact> Contacts { get; set; }
}

public class CreateUniversityCommandHandler(IApplicationDbContext context) : IRequestHandler<CreateUniversityCommand, University?> {
    public async Task<University?> Handle(CreateUniversityCommand request, CancellationToken cancellationToken) {
        var contacts = new List<UniversityContact>();

        var university = new University() {
            Name = request.Name,
            Address = request.MainAddress,
            Information = request.Information,
            Image = request.Image,
            Contacts = contacts,

        };

        for (int i = 0; i < request.Contacts.Count; i++) {
            contacts.Add(new UniversityContact() {
                Name = request.Contacts[i].Name,
                Content = request.Contacts[i].Content,
                University = university
            });
        }

        await context.Universities.AddAsync(university, cancellationToken);
        await context.SaveChangesAsync(cancellationToken);
        return university;
    }
}
