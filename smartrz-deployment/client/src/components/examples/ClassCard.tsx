import ClassCard from '../ClassCard';

export default function ClassCardExample() {
  const mockLiveClass = {
    title: 'Advanced React Patterns and Best Practices',
    link: 'https://example.com/class/1',
    instructor: 'Dr. Sarah Johnson',
    date: 'Today',
    time: '2:00 PM - 4:00 PM',
  };

  const mockUpcomingClass = {
    title: 'Introduction to Machine Learning with Python',
    link: 'https://example.com/class/2',
    instructor: 'Prof. Michael Chen',
    date: 'Tomorrow',
    time: '10:00 AM - 12:00 PM',
  };

  const mockCompletedClass = {
    title: 'Web Development Fundamentals',
    link: 'https://example.com/class/3',
    instructor: 'Emily Rodriguez',
    date: 'Yesterday',
    time: '3:00 PM - 5:00 PM',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      <ClassCard item={mockLiveClass} status="live" />
      <ClassCard item={mockUpcomingClass} status="upcoming" />
      <ClassCard item={mockCompletedClass} status="completed" />
    </div>
  );
}
