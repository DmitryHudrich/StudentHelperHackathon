using StudentHelper.Application.Common.Interfaces;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;

namespace StudentHelper.Application.Common.Behaviours;

public class LoggingBehaviour<TRequest>(ILogger<TRequest> logger, IUser user, IIdentityService identityService) : IRequestPreProcessor<TRequest> where TRequest : notnull {
    public async Task Process(TRequest request, CancellationToken cancellationToken) {
        var requestName = typeof(TRequest).Name;
        var userId = user.Id ?? String.Empty;
        var userName = String.Empty;

        if (!String.IsNullOrEmpty(userId)) {
            userName = await identityService.GetUserNameAsync(userId);
        }

        // Wtf i need check all occurences of 'bebra' later.
        logger.LogInformation("StudentHelper.Request: {Name} {@UserId} {@UserName} {@Request}",
            requestName, userId, userName, request);
    }
}
