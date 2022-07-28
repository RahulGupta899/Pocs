public class DynamicStack extends Stack{

    DynamicStack(int size){
        super(size);
    }

    DynamicStack(){
        super();
    }

    @Override
    public void push(int val){
        tos++;
        if(tos==arr.length){
            int narr[] = new int[2*arr.length];
            for(int i=0;i<arr.length;i++){
                narr[i] = arr[i];
            }
            arr = narr;
        }
        arr[tos] = val;
    }
}
