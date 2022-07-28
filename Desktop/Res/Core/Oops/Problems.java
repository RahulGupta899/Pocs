import java.util.*;

//--------------------------------------------------------------------------------------
// Problem 1: calling a class outside of main class

// public class Problems{
//     public static void main(String args[]){
//         Home h1 = new Home(878,"gulab chowar");  // Allowed
//         h1.display();
//     }
// }
// class Home{
//     int hno;
//     String street;
//     Home(int hno, String street){
//         this.hno = hno;
//         this.street = street;
//     }
//     void display(){
//         System.out.println("Address: "+this.hno+ " @ "+this.street);
//     }
// }   // Allowed
//-----------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------
// Problem 2: calling a nexted class  

// public class Problems{
    
//     static class Home{              
//         int hno;
//         String street;
//         Home(int hno, String street){
//             this.hno = hno;
//             this.street = street;
//         }
//         void display(){
//             System.out.println("Address: "+this.hno+ " @ "+this.street);
//         }
//     } 
    
//     public static void main(String args[]){             // *Insight:
//         Home h1 = new Home(878,"gulab chowar");        // Nested class needs to be declared as static 
//         h1.display();                                  // Otherwise Home class in not accessible
//     }
// }
//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 3: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();
//         s2.announceYourself();
//     }
// }
//output: 
//      Gulab Chand @ 62
//      Rakesh Prasad @ 34

//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 4: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();
//         s2.announceYourself();

//         Student s3 = s2;
//         s3.age = 32;
//         s3.name = "Lakxmi Prasad";
//         s3.announceYourself();
//         s2.announceYourself();
//     }
// }
//output:
//      Gulab Chand @ 62
//      Rakesh Prasad @ 34
//      Lakxmi Prasad @ 32
//      Lakxmi Prasad @ 32
//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 5: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }

//     static void swap(Student s1, Student s2){
//         Student temp = s1;
//         s1 = s2;
//         s2 = temp;
//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();      // Gulab chand @ 62
//         s2.announceYourself();      // Rakesh prasad @ 34

//         swap(s1,s2);


//         s1.announceYourself();      // Gulab Chand @ 62
//         s2.announceYourself();      // Rakesh Prasad @ 34
//     } 
// }

// Insights : Java always does call by value , call by reference is not possible
//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 6: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }

//     static void swap(Student s1, Student s2){
//         int tage = s1.age;
//         s1.age = s2.age;
//         s2.age = tage;

//         String tname = s1.name;
//         s1.name = s2.name;
//         s2.name = tname;
//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();      
//         s2.announceYourself();      

//         swap(s1,s2);


//         s1.announceYourself();   
//         s2.announceYourself();      
//     }
// }

//output: 
//        Gulab chand @ 62
//        Rakesh prasad @ 34
//        Rakesh Prasad @ 34
//        Gulab chand @ 62

//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 7: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }

//     static void swap(Student s1, Student s2){
//         s1 = new Student();
//         s2 = new Student();

//         int tage = s1.age;
//         s1.age = s2.age;
//         s2.age = tage;

//         String tname = s1.name;
//         s1.name = s2.name;
//         s2.name = tname;
//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();     
//         s2.announceYourself();      

//         swap(s1,s2);

//         s1.announceYourself();     
//         s2.announceYourself();      
//     }
// }

//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 8: Find output?  

// public class Problems{
    
//     static class Student{
//         int age;
//         String name;

//         void announceYourself(){
//             System.out.println(this.name+" @ "+this.age);
//         }
//     }

//     static void swap(Student s1, Student s2){
        
//         s2 = new Student();

//         int tage = s1.age;
//         s1.age = s2.age;
//         s2.age = tage;

//         s1 = new Student();
//         String tname = s1.name;
//         s1.name = s2.name;
//         s2.name = tname;

//     }
//     public static void main(String args[]){
//         Student s1;                     // Not reference is stored at this time
//         s1 = new Student();             // s1 is allocated now
//         s1.age = 62;
//         s1.name="Gulab Chand";

//         Student s2 = new Student();
//         s2.age = 34;
//         s2.name = "Rakesh Prasad";

//         s1.announceYourself();     
//         s2.announceYourself();      

//         swap(s1,s2);

//         s1.announceYourself();     
//         s2.announceYourself();      
//     }
// }

//-----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// Problem 8: Find output?  

public class Problems{
    
    static class Student{
        int age;
        String name;

        void announceYourself(){
            System.out.println(this.name+" @ "+this.age);
        }
    }

    static void swap(Student s1, Student s2){
        
        s2 = new Student();

        int tage = s1.age;
        s1.age = s2.age;
        s2.age = tage;

        
        String tname = s1.name;
        s1.name = s2.name;
        s2.name = tname;
        s1 = new Student();

    }
    public static void main(String args[]){
        Student s1;                     // Not reference is stored at this time
        s1 = new Student();             // s1 is allocated now
        s1.age = 62;
        s1.name="Gulab Chand";

        Student s2 = new Student();
        s2.age = 34;
        s2.name = "Rakesh Prasad";

        s1.announceYourself();     
        s2.announceYourself();      

        swap(s1,s2);

        s1.announceYourself();     
        s2.announceYourself();      
    }
}


