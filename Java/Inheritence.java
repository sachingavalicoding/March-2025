class A{
    String name;
    int age;

    public A(String name , int age){
        this.name = name;
        this.age = age;
    }
}
class B extends A{
        public B(String name, int age) {
                super(name, age);
            }
        
                void display(){
        System.out.println(" Name is " + name);
        System.out.println(" age is " + age);
    }
}

public class Inheritence {
    public static void main(String[] args) {
        A s1 = new A("Sachin" , 19);
        B s2 = new B("mahesh" , 20);
        s2.display();
    }
}
