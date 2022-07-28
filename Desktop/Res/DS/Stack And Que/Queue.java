public class Queue {
    
     int arr[];
     int front = 0;
     int rear = 0;
     int qsize = 0;  // *must use - makes easier for handling exceptions

    public Queue(){
        arr = new int[5];
    }

    public Queue(int sz){
        arr = new int[sz];
    }

    // Basic
    public int size(){
        return qsize;
    }

    public boolean isEmpty(){
        return qsize==0;
    }

    // Push- Dynamic Queue
    // public void addD(int val){
    //     if(qsize == arr.length){
    //         int narr[] = new int[2*arr.length];
    //         int tfront = front;
    //         for(int i=0;i<qsize;i++){
    //             narr[i] = arr[tfront];
    //             tfront++;
    //             tfront = tfront%arr.length;
    //         }
    //         front = 0;
    //         rear = arr.length;
    //         arr = narr;
    //     }
    //     arr[rear] = val;
    //     rear++;
    //     qsize++;
    //     rear = rear % arr.length;
    // }


    public void add(int val) throws Exception{
        checkOverFlowException();
        arr[rear]  = val;
        rear++;
        qsize++;

        rear = rear % arr.length;  // To make circular
    }

    public int remove() throws Exception{
        checkUnderFlowException();
        int val = arr[front];
        arr[front] = 0;
        front++;
        qsize--;

        front = front%arr.length;  // Make it circular

        return val;

    }

    public int top()throws Exception{
        checkUnderFlowException();
        int val = arr[front];
        return val;
    }

    public void display(){
        int tfront = front;
        for(int i=0;i<qsize;i++){
            System.out.print(arr[tfront]+" ");
            tfront++;
            tfront = tfront%arr.length;
        }
        System.out.println();
    }


    public void checkOverFlowException()throws Exception{
        if(this.qsize == arr.length){
            throw new Exception("Queue is Full...");
        }
    }

    public void checkUnderFlowException() throws Exception{
        if(qsize == 0){
            throw new Exception("Queue is Empty...");
        }
    }
}
