import java.util.*;

public class customPriorityQueue {
    

    public static class MyPriorityQueue {
        ArrayList<Integer> data;
        
        public MyPriorityQueue(){
            data = new ArrayList<>();
        }
                // *Misc: public MyPriorityQueue(int arr[]) {
                //   data = new ArrayList<>();
                //   for(int val: arr){
                //       data.add(val);
                //   }
                //   for(int i=data.size()/2-1 ; i>=0 ; i--){
                //       downheapify(i);
                //   }
                // }
    
        public void add(int val) {
          data.add(val); 
          upheapify(data.size()-1);
        }
    
        public int remove() {
          if(data.size()==0){
            System.out.println("Underflow");
            return -1;
          }
    
          int peek = data.get(0);
          swap(0,data.size()-1);
          data.remove(data.size()-1);
          downheapify(0);
          return peek;
        }
    
        public int peek() {
          if(data.size()==0){
            System.out.println("Underflow");
            return -1;
          }
           return data.get(0);
        }
    
        public int size() {
          return data.size();
        }
    
        public void upheapify(int cidx){

          if(cidx == 0){
            return;
          }
    
          int pidx = (cidx - 1) / 2;
          int parent = data.get(pidx);
          int child = data.get(cidx);
    
          if(parent > child){
            swap(pidx,cidx);
            upheapify(pidx);
          }
        }
    
        public void downheapify(int pidx){
          if(data.size() == 0){
            return;
          }
          int lci = 2*pidx+1;
          int rci = 2*pidx+2;

    
          int min = pidx;
          if(lci<data.size() && data.get(lci)<data.get(min)){
            min = lci;
          }
          if(rci<data.size() && data.get(rci)<data.get(min)){
            min = rci ;
          }
    
          if(min!=pidx){
            swap(pidx,min);
            downheapify(min);
          }
        }
    
        public void swap(int i, int j){
          int first = data.get(i);
          int second = data.get(j);
          data.set(i,second);  // To update in arraylist use Set function
          data.set(j,first);
        }
    
    }
    public static void main(String args[]){
        MyPriorityQueue pq = new MyPriorityQueue();
        pq.add(10);
        pq.add(20);
        pq.add(44);
        pq.add(4);
        pq.add(55);
        System.out.println(pq.peek());
        System.out.println(pq.remove());
        System.out.println(pq.peek());

                // *Misc: if i want to add the elements of an arr[] in priorityQueue, then need to make a constructor 
                // int arr[] = {3,4,2,55,7,8};
                // MyPriorityQueue pq = new MyPriorityQueue(arr);
                // System.out.println(pq.peek());
                // System.out.println(pq.remove());
                // System.out.println(pq.peek());

    }

}
