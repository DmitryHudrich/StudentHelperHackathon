namespace StudentHelper.Domain.Entities; 

public class User {
    public required Int32 Id { get; set; }
    public required String Login { get; set; }
    public required String FullName { get; set; }
    public required String Password { get; set; }
    public required Int32 Age { get; set; }
    public required String Gender { get; set; }
    public required String UniversityName { get; set; }
}
