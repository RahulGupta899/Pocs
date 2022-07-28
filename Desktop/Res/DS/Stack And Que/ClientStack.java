public class ClientStack {
    public static void main(String args[]) throws Exception{  // Main mai v throws Exception khyki Stack throw kar sakta hai
        DynamicStack st = new DynamicStack(3);

        st.push(5);      
        st.push(10);
        st.push(3);
        System.out.println(st.size());
        System.out.println(st.peek());
        st.push(44);
        st.push(34);
        System.out.println(st.size());
        System.out.println(st.peek());
        // // st.push(44);
        // System.out.println(st.peek());
        // System.out.println(st.size());
        

        // st.pop();
        // st.pop();
        // st.pop();
        // st.pop();
        // st.pop();
        // // System.out.println(st.peek());
        // System.out.println(st.size());
        
    }
}
