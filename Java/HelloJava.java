class Student
{
	// data members or properties 
	private int roll = 19;
	private String name = "Sachin ";
	private double marks = 89.90;
	
	// setters and getters 
	public int getRoll () {
	 return roll;	
	}
	public String getName () {
	 return name;	
	}
	public double getMarks () {
	 return marks;	
	}
}


class HelloJava 
{
	public static void main(String[] args) 
	{
		System.out.println("Main Started");
		Student s1 = new Student();
		System.out.println(" My Name is " + s1.getName() + " My roll number is " + s1.getRoll() + " i got  " + s1.getMarks() + "marks");
	}
}
