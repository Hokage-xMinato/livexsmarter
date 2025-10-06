import ClassSection from '../ClassSection';

export default function ClassSectionExample() {
  const mockClasses = [
    {
      title: 'Advanced React Patterns and Best Practices',
      link: 'https://example.com/class/1',
      instructor: 'Dr. Sarah Johnson',
      date: 'Today',
      time: '2:00 PM - 4:00 PM',
    },
    {
      title: 'Introduction to Machine Learning',
      link: 'https://example.com/class/2',
      instructor: 'Prof. Michael Chen',
      date: 'Today',
      time: '4:00 PM - 6:00 PM',
    },
  ];

  return (
    <div className="p-8 space-y-12">
      <ClassSection 
        title="Live Now"
        items={mockClasses}
        status="live"
        emptyMessage="No live classes at the moment"
      />
      <ClassSection 
        title="Upcoming"
        items={[]}
        status="upcoming"
        emptyMessage="No upcoming classes scheduled"
      />
    </div>
  );
}
