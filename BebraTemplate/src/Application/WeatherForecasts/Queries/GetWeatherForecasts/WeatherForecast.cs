namespace StudentHelper.Application.WeatherForecasts.Queries.GetWeatherForecasts;

public class WeatherForecast {
    public DateTime Date { get; init; }

    public Int32 TemperatureC { get; init; }

    public Int32 TemperatureF => 32 + (Int32)(TemperatureC / 0.5556);

    public String? Summary { get; init; }
}
