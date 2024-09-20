'use client'//enables cleint rendering
import {useState, ChangeEvent} from "react";//import hooks
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
//Default export fo calc component
export default function CalculatorComponent(){
    const [num1, setNum1]=useState<string>("")
    const [num2, setNum2]=useState<string>("")
    const [result, setResult]=useState<string>("");

//handler fir updating num1 state on input change
const handleNum1change = (e:ChangeEvent<HTMLInputElement>):void => {
    setNum1(e.target.value);
} 
//handle for updating num2
const handleNum2change= (e:ChangeEvent<HTMLInputElement>):void=>{
    setNum2(e.target.value)
}
//fn to perform addition
const add = (): void=> {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
}
//fn for subraction 
const subract = ():void=> {
    setResult((parseFloat(num1)- parseFloat(num2)).toString());
}
//fn for multiply
const multiply = ():void=> {
    setResult((parseFloat(num1)* parseFloat(num2)).toString());
}
const divide = ():void=> {
    if(parseFloat(num2) !==0){
        setResult((parseFloat(num1)/parseFloat(num2)).toString());
    }else{
        setResult("Error:Division by zero")
    };
};

//fn to clear inputs and result
const clear = (): void=> {
    setNum1("");
    setNum2("");
    setResult("");
};
//jsx UI
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 dark:bg-gray-900">
      <Card className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num1" className="text-white">Number 1</Label>
              <Input
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1change}
                placeholder="Enter a number"
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2" className="text-white">Number 2</Label>
              <Input
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2change}
                placeholder="Enter a number"
                className="bg-gray-700 text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-300"
              onClick={add}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-300"
              onClick={subract}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-300"
              onClick={multiply}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-300"
              onClick={divide}
            >
              /
            </Button>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="result" className="text-white">Result</Label>
            <Input
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
              className="bg-gray-700 text-white"
            />
          </div>
          <Button variant="outline" className="w-full text-white" onClick={clear}>
            Clear
          </Button>
        
        </CardContent>
      </Card>
    </div>
  );
  


}