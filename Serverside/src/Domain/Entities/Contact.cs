namespace StudentHelper.Domain.Entities; 

public class Contact {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
}
