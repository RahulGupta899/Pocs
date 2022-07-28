public class DynamicQueue extends Queue{

    DynamicQueue(){
        super();
    }

    DynamicQueue(int size){
        super(size);
    }

    @Override
    public void add(int val){
        if(qsize == arr.length){
            int narr[] = new int[2*arr.length];
            int tfront = front;
            for(int i=0;i<qsize;i++){
                narr[i] = arr[tfront];
                tfront++;
                tfront = tfront%arr.length;
            }
            front = 0;
            rear = arr.length;
            arr = narr;
        }
        arr[rear] = val;
        rear++;
        qsize++;
        rear = rear % arr.length;
    }
}
