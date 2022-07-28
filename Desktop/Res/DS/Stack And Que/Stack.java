public class Stack{

    protected int arr[] ;
    protected int tos = -1;
    private int arrSize;

    public Stack(){  // Default
        this.intitialize(5);
    }

    public Stack(int size){
        this.intitialize(size);
    }

    protected void intitialize(int size){
        this.arrSize = size;
        this.arr = new int[arrSize];
    }

    
    //basic
    public int size(){
        return this.tos+1;
    }
    
    public boolean isEmpty(){
        return tos==-1;
    }
    
    // operations
    public void push(int val) throws Exception{
        tos++;
        checkOverFlowException();
        arr[tos] = val;
    }

    public int pop() throws Exception{
        checkUnderFlowException();
        int val = arr[tos];
        arr[tos] = 0;
        tos--;
        return val;
    }

    public int peek() throws Exception{
        checkUnderFlowException();
        int val = arr[tos];
        return val;
    }

    private void checkOverFlowException() throws Exception{
        if(this.tos == arr.length){
            throw new Exception("oops!! Stack is full...");
        }
    }

    private void checkUnderFlowException() throws Exception{
        if(this.isEmpty()){
            throw new Exception("oops!! Stack is Empty...");
        }
    }


    protected int sizeOfArray(){
        return this.arrSize;
    }
   
}
