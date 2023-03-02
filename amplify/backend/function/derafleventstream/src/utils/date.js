"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUtcDateString = void 0;
exports.getUtcDateString = (date) => {
    const options = {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        daySuffix: true,
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);
    return formattedDate + ' UTC';
};
//# sourceMappingURL=date.js.map