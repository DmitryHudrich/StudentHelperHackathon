namespace StudentHelper.Domain.Exceptions;

public class UnsupportedColourException(String code) : Exception($"Colour \"{code}\" is unsupported.") {
}
