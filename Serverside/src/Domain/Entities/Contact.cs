namespace StudentHelper.Domain.Entities; 

public class TopicContact {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
    public required Topic Topic { get; set; }
}

public class UniversityContact {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
    public required University University { get; set; }
}

public class BranchContact {
    public Int32 Id { get; set; }
    public required String Name { get; set; }
    public required String Content { get; set; }
    public required Branch Branch { get; set; }
}
