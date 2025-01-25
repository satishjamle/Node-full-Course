import https from 'https'; 
import readline from 'readline'; 
import chalk from 'chalk'; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const apikey = '1eeccfb59edc61c8c944107e';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        try {
            const responseData = JSON.parse(data);
            console.log(responseData); 
             // Debugging: log raw response
            const rates = responseData.conversion_rates;

            rl.question('Enter the amount in USD: ', (amount) => {
                rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
                    const rate = rates[currency.toUpperCase()];
                    console.log(`Amount: ${amount}, Rate: ${rate}, Currency: ${currency}`); 
                     // Debugging: log rate extraction
                    if (rate) {
                        console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                    } else {
                        console.log(`Invalid Currency Code`);
                    }
                    rl.close();
                });
            });
        } catch (error) {
            console.log('Error parsing response:', error);
        }
    });
}).on('error', (err) => {
    console.log('Error fetching data:', err);
});
