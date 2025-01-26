import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apiGateway from "aws-cdk-lib/aws-apigateway";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as path from "path";

const env = { account: "544690439995", region: "ap-northeast-1" };

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, { ...props, env: { ...props?.env, ...env } });

    const fn = new NodejsFunction(this, "lambda", {
      // entry: path.join(__dirname, "../../apps/backend/src/index.ts"),
      entry: path.join(__dirname, "../src/index.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_20_X,
    });
    fn.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });
    new apiGateway.LambdaRestApi(this, "api", {
      handler: fn,
    });
  }
}
