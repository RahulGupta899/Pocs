public class ClientQueue {
    public static void main(String args[]) throws Exception{
        Queue que = new Queue();
        que.add(10);
        que.add(20);
        que.add(30);
        que.add(40);
        que.display();
        System.out.println("\n"+  que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());
        que.add(50);
        que.display();
        System.out.println("\n"+ que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());
        que.remove();
        que.remove();
        que.display();
        System.out.println("\n"+que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());
        que.add(60);
        que.display();
        System.out.println("\n"+que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());
        que.add(70);
        que.display();
        System.out.println("\n"+que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());

        que.remove();
        que.remove();
        que.display();
        System.out.println("\n"+que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());

        que.remove();
        que.display();
        System.out.println("\n"+que.size());
        System.out.println(que.top());
        System.out.println(que.isEmpty());
        que.remove();
        que.remove();
        que.display();
        System.out.println("\n"+que.size());
        // System.out.println(que.top());
        System.out.println(que.isEmpty());
    }
}
