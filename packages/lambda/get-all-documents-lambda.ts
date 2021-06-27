export const handler = async function(event: any) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 2000,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, CDK! You've hit ${event.path}\n`
    };
};