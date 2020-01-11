Assumptions:

1. Date Format: DD/MM/YYYY.
2. Input array will be sorted by timestamp, as provided in the clicks.json.
3. If maximum amoumnt ties for two different IPs in a one hour period, then the earlier one will be placed in output array.
4. If maximum amount as well as timestamps tie for two or more different clicks, the one which comes first in Order in the input array will placed in the output array. 

How to run the app:

1. Run "npm install" in the root folder which contains package.json file.
2. Run "npm run solution" command to see the output in console.
3. Run "npm run test" command to execute the test cases.


NPM Packages used:

1. moment : Used to handle the timestamp i.e extracting hour out of the timestamp.
2. mocha  : Test framework
3. expect : Used to write assertions.

