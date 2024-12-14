class Test{
    public static void main(String[] args) {
        for(int i=1;i<=10;i++){
            System.out.println(i);
            i=i-2;
            if(i<-10){
                break;
            }
        }
    }
}