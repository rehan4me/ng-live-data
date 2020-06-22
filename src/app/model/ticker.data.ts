export type TickerData = [
    number,
    number,
    [
        number,
        string,
        string,
        string,
        string,
        string,
        string,
        boolean,
        string,
        string,
    ]
];

export const TickerDataLabel = [
    'CURRENCY PAIR ID',
    'LAST TRADE PRICE',
    'LOWEST ASKING PRICE',
    'HIGHEST BID',
    'PERCENTAGE CHANGE in last 24 HOURS',
    'BASE CURRENCY VOLUME in last 24 HOURS',
    'QUOTE CURRENCY VOLUME in last 24 HOURS',
    'FROZEN',
    'HIGHEST TRADING PRICE in last 24 HOURS',
    'LOWEST TRADING PRICE in last 24 HOURS'
];
