public class clientDynamicQueue {
    public static void main(String args[]) throws Exception{
        DynamicQueue que = new DynamicQueue();
        que.add(10);
        que.add(20);
        que.add(30);
        que.add(40);
        que.add(50);
        que.display();
        que.remove();
        que.remove();
        que.display();
        que.add(60);
        que.add(70);
        que.add(80);
        que.display();
        que.add(90);
        que.add(100);
        que.add(110);
        que.remove();
        que.add(435);
        que.display();
        
        System.out.println(que.size());
    }
}
