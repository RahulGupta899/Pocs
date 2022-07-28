package India;

public class Communicator {
    public static void main(String args[]){
        Student s1 = new Student();
        System.out.println(s1);
        s1.setAge(23);
        s1.setName("Rahul");
        System.out.println(s1.getName());
        System.out.println(s1.getAge());
        System.out.println(s1);
    }

}



public static void main(String[] args) throws Exception {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String str = br.readLine();
    Stack<Integer> st = new Stack<>();

    int num = 1;
    for(int i=0;i<str.length();i++){
        char ch = str.charAt(i);
        if(ch == 'd'){
            st.push(num);
            num++;
        }
        else if(ch == 'i'){
            st.push(num);
            while(st.size()!=0){
                System.out.print(st.pop());
            }
            num++;
        }
    }

    // Last mai dalke pop karo
    st.push(num);
    while(st.size()>0){
        System.out.print(st.pop());
    }
 }
}
