namespace StudentHelper.Domain.ValueObjects;

public class Colour(String code) : ValueObject {
    public static Colour From(String code) {
        var colour = new Colour(code);

        return !SupportedColours.Contains(colour) ? throw new UnsupportedColourException(code) : colour;
    }

    public static Colour White => new("#FFFFFF");

    public static Colour Red => new("#FF5733");

    public static Colour Orange => new("#FFC300");

    public static Colour Yellow => new("#FFFF66");

    public static Colour Green => new("#CCFF99");

    public static Colour Blue => new("#6666FF");

    public static Colour Purple => new("#9966CC");

    public static Colour Grey => new("#999999");

    public String Code { get; private set; } = String.IsNullOrWhiteSpace(code) ? "#000000" : code;

    public static implicit operator String(Colour colour) {
        return colour.ToString();
    }

    public static explicit operator Colour(String code) {
        return From(code);
    }

    public override String ToString() {
        return Code;
    }

    protected static IEnumerable<Colour> SupportedColours {
        get {
            yield return White;
            yield return Red;
            yield return Orange;
            yield return Yellow;
            yield return Green;
            yield return Blue;
            yield return Purple;
            yield return Grey;
        }
    }

    protected override IEnumerable<Object> GetEqualityComponents() {
        yield return Code;
    }
}
