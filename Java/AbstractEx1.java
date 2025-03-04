abstract class Animal {
    abstract void display();

    abstract int marks(int n);
}

class Cat extends Animal {

    @Override
    void display() {
        System.out.print(" Hello Cat ");
    }

    @Override
    int marks(int n) {
        return n * 10;
    }

}

public class AbstractEx1 {
    public static void main(String[] args) {
        Animal s1 = new Cat();
        Cat c1 = new Cat();
        int ans = s1.marks(20);
        System.out.println(ans);
        c1.display();
        s1.display();
    }
}
