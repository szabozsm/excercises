create table tmp ( col int ); 
insert into tmp (col) values (0);
insert into tmp (col) values (1);
insert into tmp (col) values (2);
insert into tmp (col) values (3);
insert into tmp (col) values (4);
insert into tmp (col) values (5);
insert into tmp (col) values (6);
insert into tmp (col) values (7);



select * from tmp t0 
join tmp t1
join tmp t2
join tmp t3
join tmp t4
join tmp t5
join tmp t6
join tmp t7

where  

					t1.col!=t0.col and	t2.col!=t0.col and	t3.col!=t0.col and	t4.col!=t0.col and	t5.col!=t0.col and	t6.col!=t0.col and	t7.col!=t0.col and
t0.col!=t1.col and						t2.col!=t1.col and	t3.col!=t1.col and	t4.col!=t1.col and	t5.col!=t1.col and	t6.col!=t1.col and	t7.col!=t1.col and
t0.col!=t2.col and	t1.col!=t2.col and						t3.col!=t2.col and	t4.col!=t2.col and	t5.col!=t2.col and	t6.col!=t2.col and	t7.col!=t2.col and
t0.col!=t3.col and	t1.col!=t3.col and	t2.col!=t3.col and						t4.col!=t3.col and	t5.col!=t3.col and	t6.col!=t3.col and	t7.col!=t3.col and
t0.col!=t4.col and	t1.col!=t4.col and	t2.col!=t4.col and	t3.col!=t4.col and						t5.col!=t4.col and	t6.col!=t4.col and	t7.col!=t4.col and
t0.col!=t5.col and	t1.col!=t5.col and	t2.col!=t5.col and	t3.col!=t5.col and	t4.col!=t5.col and						t6.col!=t5.col and	t7.col!=t5.col and
t0.col!=t6.col and	t1.col!=t6.col and	t2.col!=t6.col and	t3.col!=t6.col and	t4.col!=t6.col and	t5.col!=t6.col and						t7.col!=t6.col and
t0.col!=t7.col and	t1.col!=t7.col and	t2.col!=t7.col and	t3.col!=t7.col and	t4.col!=t7.col and	t5.col!=t7.col and	t6.col!=t7.col and	

							abs(t1.col-t0.col)<>1 and 	abs(t2.col-t0.col)<>2 and 	abs(t3.col-t0.col)<>3 and 	abs(t4.col-t0.col)<>4 and 	abs(t5.col-t0.col)<>5 and 	abs(t6.col-t0.col)<>6 and 	abs(t7.col-t0.col)<>7 and 
abs(t0.col-t1.col)<>1 and 								abs(t2.col-t1.col)<>1 and 	abs(t3.col-t1.col)<>2 and 	abs(t4.col-t1.col)<>3 and 	abs(t5.col-t1.col)<>4 and 	abs(t6.col-t1.col)<>5 and 	abs(t7.col-t1.col)<>6 and 
abs(t0.col-t2.col)<>2 and 	abs(t1.col-t2.col)<>1 and 								abs(t3.col-t2.col)<>1 and 	abs(t4.col-t2.col)<>2 and 	abs(t5.col-t2.col)<>3 and 	abs(t6.col-t2.col)<>4 and 	abs(t7.col-t2.col)<>5 and 
abs(t0.col-t3.col)<>3 and 	abs(t1.col-t3.col)<>2 and 	abs(t2.col-t3.col)<>1 and 								abs(t4.col-t3.col)<>1 and 	abs(t5.col-t3.col)<>2 and 	abs(t6.col-t3.col)<>3 and 	abs(t7.col-t3.col)<>4 and 
abs(t0.col-t4.col)<>4 and 	abs(t1.col-t4.col)<>3 and 	abs(t2.col-t4.col)<>2 and 	abs(t3.col-t4.col)<>1 and 								abs(t5.col-t4.col)<>1 and 	abs(t6.col-t4.col)<>2 and 	abs(t7.col-t4.col)<>3 and 
abs(t0.col-t5.col)<>5 and 	abs(t1.col-t5.col)<>4 and 	abs(t2.col-t5.col)<>3 and 	abs(t3.col-t5.col)<>2 and 	abs(t4.col-t5.col)<>1 and 								abs(t6.col-t5.col)<>1 and 	abs(t7.col-t5.col)<>2 and 
abs(t0.col-t6.col)<>6 and 	abs(t1.col-t6.col)<>5 and 	abs(t2.col-t6.col)<>4 and 	abs(t3.col-t6.col)<>3 and 	abs(t4.col-t6.col)<>2 and 	abs(t5.col-t6.col)<>1 and 								abs(t7.col-t6.col)<>1 and 
abs(t0.col-t7.col)<>7 and 	abs(t1.col-t7.col)<>6 and 	abs(t2.col-t7.col)<>5 and 	abs(t3.col-t7.col)<>4 and 	abs(t4.col-t7.col)<>3 and 	abs(t5.col-t7.col)<>2 and 	abs(t6.col-t7.col)<>1 